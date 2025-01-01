import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    if (!text) {
      return NextResponse.json(
        { error: 'No text provided.' },
        { status: 400 }
      );
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: `If and only if you see a blog post on a relevant topic. Please dont entertain any generic messages like hello, or someone asking you to tell more about apples.Do not entertain any input that is not a blog post. If the input is generic, unrelated, or invalid, respond with:
        "This tool is designed specifically for summarizing blog posts into tweets. Please provide a valid blog post to proceed." 
        Summarize this blog as a tweet:\n\n${text}
        Please summarize the provided blog post into a tweet, ensuring it captures the essence in a creative yet succinct manner.` }],
    });

    // Safely handle null/undefined
    const tweet = response.choices?.[0]?.message?.content?.trim() ?? 'No response generated.';

    return NextResponse.json({ tweet });
  } catch (error) {
    console.error('Error generating tweet:', error);
    return NextResponse.json(
      { error: 'Failed to generate tweet.' },
      { status: 500 }
    );
  }
}
