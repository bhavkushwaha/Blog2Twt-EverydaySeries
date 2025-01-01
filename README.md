# Blog2Tweet

Blog2Tweet is a web application that simplifies the process of converting long-form blog posts into concise and engaging tweets. By leveraging the power of the AI, the application generates tweet-worthy content effortlessly. With a user-friendly interface and seamless authentication, Blog2Tweet helps users create impactful tweets that resonate.


## Purpose

The idea behind Blog2Tweet is to make it easier for individuals, marketers, and businesses to extract key insights from their blogs and share them effectively on social media. Writing a great blog is one thing, but summarizing its essence into a limited number of characters can be challenging. Blog2Tweet automates this process, ensuring you never miss out on showcasing your blog's value.

## Features

- **Convert Blog to Tweet**: Paste your blog post, and let Blog2Tweet create tweet-sized summaries for you.
- **Clerk Authentication**: Secure and seamless user authentication and registration.
- **Modern UI**: Designed with ShadCN and TailwindCSS for a clean, responsive, and visually appealing interface.
- **ChatGPT Integration**: Utilizes the OpenAI ChatGPT API for advanced natural language processing.
  
The application is deployed and available live. Check it out here: https://blog2-twt-everyday-series.vercel.app/

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **Styling**: [ShadCN](https://shadcn.dev/) and [TailwindCSS](https://tailwindcss.com/)
- **API Integration**: [ChatGPT API](https://platform.openai.com/docs/api-reference)

---

## Getting Started

Follow these steps to set up and run Blog2Tweet locally.

### Prerequisites

- **Node.js** (v16 or above)
- **npm** or **yarn** package manager
- OpenAI API Key (for ChatGPT integration)
- Clerk API credentials

### Setup Instructions

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/blog2tweet.git
   cd blog2tweet

2. **Install Dependencies**  
   ```bash
   npm install
    # or
   yarn install

3. **Set Up Environment Variables**
   
    Create a .env.local file in the root directory and add the following:

    ``` bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY==<Your Clerk PUBLISHABLE_KEY>
   CLERK_API_KEY=<Your Clerk API Key>
   OPENAI_API_KEY=<Your OpenAI API Key>

4. **Run the Application**
   
    Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The app will be available at http://localhost:3000.

5. **Access the Application**
<ul>
<li>Navigate to http://localhost:3000 in your browser.</li>
<li>Sign up or log in using Clerk authentication.</li>
<li>Paste your blog content and convert it into tweets!</li>
</ul>

## Screenshots

1. **Landing Page**
   
![image](https://github.com/user-attachments/assets/9f2e7268-68e4-45cf-9148-5581b1d95cfa)

2. **Authentication**

![image](https://github.com/user-attachments/assets/5f7834f7-2e6c-4ecb-8907-7acbd40dfb30)

3. **Application (Not used Yet)**

![image](https://github.com/user-attachments/assets/95efb52b-bdf4-4e68-8149-e1f144eae5ca)
   
4. **Application (Tweet Generated)**

![image](https://github.com/user-attachments/assets/a75f19f2-79eb-4e32-a34e-b86b757f6eca)

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request if you have any improvements or feature suggestions.

<ul>
<li>Fork the repository.</li>
<li>Create a new branch (feature/new-feature).</li>
<li>Commit your changes.</li>
<li>Push to the branch.</li>
<li>Open a pull request.</li>
</ul>
