## 🌿 NextJs Fundamental's

- [NextJs](https://nextjs.org/) is a React framework that allows you to build static and server-side rendered applications.
- Write code for the browser(Frontend) and server(Backend) with NextJs.

- **Careful with the naming of the files and folders in NextJs, it is case sensitive.**

- Create a Template Component : `rafce`

### 🛖 App Routing

- Next.js has a file-based routing system.
- Create a new file in the pages directory and it will be automatically available at the route.
- Example : `pages/about.js` will be available at `localhost:3000/about`
- **Dynamic Routes** : `pages/posts/[id].js` will be available at `localhost:3000/posts/1` or `localhost:3000/posts/2` and so on.
- **Nested Routes** : `pages/posts/[id]/[comment].js` will be available at `localhost:3000/posts/1/comment1` or `localhost:3000/posts/2/comment2` and so on.

### ✨ Client vs Server Side Rendering & Components

- Server vs client components in NextJs 13 – When to use which : [🔗 Youtube](https://www.youtube.com/watch?v=3Dw6D_WuzSE)
- Server and Client Components Video - 1 : [🔗 Youtube](https://www.youtube.com/watch?v=KvjWqn1VpPc)
- Server and Client Components Video - 2 : [🔗 Youtube](https://youtu.be/80o9bNpima4?si=ZX7vbVhI-I7GASHU)
- Server and Client Components Blog - 1 : [🔗 Documentation](https://nextjs.org/learn/react-foundations/server-and-client-components)

#### **Server Side Rendering**:

- The client sends a request to the server.
- The server fetches the data.
- The server renders the data.
- The server sends back an HTML file.
- The client receives the HTML file.
- The client displays the HTML file.

The server refers to the computer in a data center that stores your application code, receives requests from a client, does some computation, and sends back an appropriate response.

- Run on Server side console
- Next.js uses Server Components by default
- This is a **Server Side rendering component**

```tsx
import React from "react";
import { AddToCart } from "./AddToCart";

// Server Side Rendering
const ProductCard = () => {
  return (
    <div>
      console.log("This code is running in sever console");
      <AddToCart />
    </div>
  );
};

export default ProductCard;
```

#### **Client Side Rendering**:

- The client sends a request to the server.
- The server sends back an HTML file with a script tag.
- The script tag fetches the JavaScript code.
- The JavaScript code fetches the data.
- The JavaScript code renders the data.

The client refers to the browser on a user’s device that sends a request to a server for your application code. It then turns the response it receives from the server into an interface the user can interact with.

- This is a **client side rendering component**

```tsx
"use client";
import React from "react";

// Client Side Rendering
export const AddToCart = () => {
  return (
    <div>
      console.log("This code is running in Client Console");
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => console.log("Working")}
      >
        Add to Cart
      </button>
    </div>
  );
};
```

### A brief disscussion on Server and Client Components

You would notice that most of the parts and segments and components on the page are static there's **nothing interactive** about them and they can be entirely **rendered on the server** using server. Components now for example here we have this nav bar up top which is a static component only this search bar on this side needs client-side interactivity

Whatever components they may be, they only have these buttons that need interactivity. As you can see, we can keep a lot of these components and the JavaScript belonging to these components on the server entirely and then only send their specific or necessary components that require interactivity to the client side. Now, you may ask why you would want to use server components and make this complicated with rendering client components or React on a client side anyway. For the past few years, what's up with the server components? Well, **the main reason for using server components is improved performance**.

That is because of three reasons. First of all, you can move your data fetching to your server side. Therefore, you can use the infrastructure of your server. Typically, your servers are going to be stronger machines with better internet compared to your users' machines or internet. **You can fetch data there. Plus, you can be closer to your database, so there is less latency of going back and forth between your server and your database. This means improved performance because of the infrastructure and lower latency**.

The second reason would be that you can now entirely keep the large dependencies that your app depends on, on the server. So, any third-party packages that you're using can entirely remain on the server compared to when you use client-side rendering. You'd have to ship all of those packages to the client side, which increases your JavaScript bundle size sent to the client. Because of these two reasons, with server components, **your initial page load is going to be faster because all of the data fetching is happening on the server**. The client is just going to get a generated HTML, which is the result of your page and your data together. You're going to also ship less JavaScript to the client side, so React code can be downloaded faster, and your site or your page can be interactive faster.

All components inside the app router are React server components by default. **All of your special files like Pages, layouts, loading and error, and also all call logs created components that are living inside the app router are going to be React server components by default**. If you need client-side components, you can bring them in with the use of the ***use client*** directive. **Client components enable you to add client-side interactivity**, as I already mentioned. The way you define them is with the use of the use client directive. You will put that use client directive up top of any module or component that you want to turn into a client component. That would create a boundary or define a boundary between server and client.

Any other module or component imported into that file is going to also become a client component. That's the reason why we cannot import a server component into a client component. **Once you have that use client directive up top, that will mark the boundary, and everything inside of it nested down, even to the children, are going to become a client component.** Therefore, you won't even need to repeat this use client further down inside the components that are imported into this client component. Once you mark this used client or the boundary once, everything else further down imported into this client component is going to be automatically a client component.

Server components are guaranteed to only be rendered on the server, and from a React perspective, client components are rendered entirely or primarily on the client side. However, in Next.js, we know client components are also pre-rendered on the server. So, the HTML is going to be generated on the server, and then the result is going to be hydrated on the client side or become interactive on the client side using React.

#####  When would you use which? When would you use a server component versus a client component? 
**The rule of thumb is to use server components unless you have a specific reason to use a client component**. 

##### ✨ What are those specific reasons? for using client components
If you wanted to **add any interactivity** and **event listeners such as on click and on change**, anything that needs to interact with the user, you would use a client component. If you want to use **React hooks** or any custom hook that depends on React hooks, **useState, useEffect, or context**, you would use a client component. Another reason would be anytime that you want to access any browser-specific APIs. For example, you want to access the window object or the intersection observer. These are only accessible in the browser, so you would need to use a client component to be able to access them. The last reason why you would want or the use case why you want to use a client component is if you want to use a React class component.

In all other cases, you're going to use React server component. **If you need to fetch data, you can fetch your data or co-locate your data fetching with your server component on the server side.** Anytime you need to access any backend service or sensitive information like tokens and environment variables, you're going to use server components, especially if you want to keep your large dependencies on the server instead of sending that JavaScript bundle to the client. You're going to use or default to using React server components.

Now, let's talk about a couple of common patterns when you want to compose your client components and server components together to create your application. The first one is to move your client components as further down as you can to the leaves of your component tree. **Therefore, Next.js can optimize the performance of your application by rendering as much as possible on the server.** For example, in this example that we had over here up top, as you can see, *we have this search bar, which needs to be a client component. It needs client interactivity. Instead of turning this whole navbar or the whole layout into a client component just because this search bar needs interactivity, you can abstract the interactivity logic of the search bar into its own client component and still bring that in or import it inside of your layout, which is a server component.*

So, you're going to take that or bring that inside of a server component, which is going to allow Next.js to render your layout on the server and just plug in this search bar or client component to this whole server component. When composing server and client components together, behind the scene, R**eact is going to render all your server components on the server. It's going to then send the results of your server components to the client.** During this stage, if it encounters any client component, it is going to skip rendering it and it's going to create a little hole or a little slot for this client component. Once the result is sent to the client side, these client components are going to be rendered and they're going to just be filled into this slot that was coming from the server, merging the result of your server render and client render together.

It will be the same if you're nesting a server component inside of a client component. Your server component is going to be rendered on the server, and the result is sent to the client. Once the client is rendered, the result of your server component is going to just be plugged into where it needs to be plugged in. We know already that server components can only be passed in as children to client components, so your client component is not even aware of what it is that is going to be rendered inside of its children. It only knows where exactly these children are supposed to be rendered, but once it actually gets rendered on the client side, it just plugs in whatever that came from the server, which is the result of your server component, and it's going to plug it inside that specific slot that was left for your server component.

**As I mentioned already, if you wanted to nest a server component inside a client component, you have to pass it as a child.** **You cannot import a server component in a client component.** Doing so will turn that server component into a client component, and if your server component is an async function, it's going to throw an error. Let me show you an example from the documentation. Here, imagine that we have this example client component that uses this use client directive up top, and it's importing an example server component inside. This won't work because you cannot import a server component inside of a client component. Instead, you have to pass your server component as a child to your client component.

So, you're going to refactor your client component to accept a child. You're going to have a slot open for any child that's going to be plugged in here. Now, this happens to be a server component. It can also be a client component. This client component is not even aware of what it is that is going to be rendered here. It just has a slot open for a child. Inside of a parent server component, for example, inside of your page, you're going to bring in your example client component, and then you're going to pass your server component as a child to your client component. This is exactly the way or the pattern that we're going to actually use to use React context or to share a global context inside of the app router or within the root layout.

React context uses React Hooks, and React Hooks can only be used in client components. So, we're going to have a context provider just similar to this as a client component, and we're going to plug in the rest of our application pages and layouts as server components inside of this context provider so we can share that context throughout our client-side components. We're going to see this in action later on when we jump to the code and add a theme provider to our application to enable dark and light themes using...
