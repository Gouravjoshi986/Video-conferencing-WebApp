# Step 1: Use the official Node.js image as a base for building the app
FROM node:18-alpine AS build

# Step 2: Set the working directory 
WORKDIR /video-app

# Step 3: Install dependencies for the app
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of the project files to the container
COPY . .

# Step 5: Build the Next.js app
RUN npm run build

# Step 6: Use a lightweight image for running the app
FROM node:18-alpine AS production

# Step 7: Set the working directory in the production container
WORKDIR /video-app

# Step 8: Copy necessary files from the build stage to production
COPY --from=build /video-app/node_modules ./node_modules
COPY --from=build /video-app/.next ./.next
COPY --from=build /video-app/package*.json ./
COPY --from=build /video-app/public ./public
COPY --from=build /video-app/next.config.mjs ./

# Step 9: Expose the port the app will run on (Next.js default is 3000)
EXPOSE 3000

# Step 10: Define the command to run your Next.js app in production mode
CMD ["npm", "run", "dev"]
