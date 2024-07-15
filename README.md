## Next.js App Router Course Tutorial

This is a Dashboard web app built using instructions from the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

The course provides a boiler plate template and introduces you to basic routing/navigation, fetching data, deployment with [Vercel](https://vercel.com/signup) / [PostgreSQL](https://www.postgresql.org/), and authentication.

If you'd like to clone this example and run the app, follow the instructions below.

#### Things you will need
- [Node.js](https://nodejs.org/en)
- Your own [Vercel](https://vercel.com/signup) account
- A GitHub Repository under your account to link your Vercel account and push the boiler plate code to. Reference [_How to Push a Cloned Repo from Another User to Your Own Repo on GitHub_](#how-to-push-a-cloned-repo-from-another-user-to-your-own-repo-on-github) should you need help with this.

## How To Run The App

1. From a terminal window, run the command:
    ```bash
    git clone git@github.com:wes-mitchell/nextjs-dashboard.git
    ```

2. Once complete, navigate into the root directory of the repository:
    ```bash
    cd nextjs-dashboard/
    ```
    and run:
    ```bash
    npm install
    ```
    to install missing dependencies.

3. The **.env** file has been git ignored, so you will have to create this file in the root of your directory before proceeding to step four.

4. [Click here to follow steps from Chapter 6](https://nextjs.org/learn/dashboard-app/setting-up-your-database) and follow the simple steps to set up your own database and account on Vercel.

5. After you have seeded the database, in your terminal window run `npm run dev` from the root of the directory. You may then log in and navigate the app with the credentials below:
    ```
    User: donnie@tmnt.com
    Password: 19computer$AreTubular84
    ```
You may reference all seeded data in the _placeholder-data.ts_ file within the project. 

**_Please Note the Customers Page was not included in the demo so it just reads Customers._**

I got what I needed out of the demo, which was a foundational understanding of Next.js and did not see any personal benefit in setting up the Customers page.

## How to Push a Cloned Repo from Another User to Your Own Repo on GitHub

1. **Clone the repository:**

    ```bash
    git clone https://github.com/other-user/original-repo.git
    cd original-repo
    ```

2. **Create a new repository on GitHub:**

    - Visit [GitHub](https://github.com/new)
    - Enter a repository name and create the repository. Do not initialize it with a README, .gitignore, or license.

3. **Change the remote URL:**

    ```bash
    git remote set-url origin https://github.com/your-username/your-new-repo.git
    ```

4. **Push to your new repository:**

    ```bash
    git push -u origin main
    ```

    If the default branch is `master` instead of `main`, use:

    ```bash
    git push -u origin master
    ```

By following these steps, you should be able to push a cloned repository from another user to your own repository on GitHub.
