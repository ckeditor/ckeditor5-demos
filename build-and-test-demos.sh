#!/bin/bash

# Set error variable
PROJECT_DIR=$(pwd)

echo "Creating builds directory..."
mkdir -p builds
mkdir -p builds/assets

echo "Installing dependencies..."
yarn install > /dev/null 2>&1

echo "Building packages..."
yarn build > /dev/null 2>&1

echo "Copying assets..."
for DIR in */dist; do
    # Get the name of the demo
    DEMO_NAME=$(basename $(dirname "$DIR"))

    # Copy the static assets to the "builds" directory.
    mv "$DIR"/assets/* "builds/assets/" -n > /dev/null 2>&1

    # Move the index.html files to the "builds" directory and rename them to match the demo name.
    mv "$DIR"/index.html "builds/$DEMO_NAME.html"

    # Move the rest of the html files to the "builds" directory without renaming them.
    find "$DIR" -maxdepth 1 -type f -name "*.html" -exec mv {} "builds/" \;

    # Remove the "dist" directory from the demo.
    rm -rf "$DIR"
done

cd "$PROJECT_DIR" || exit

echo "Starting the server..."
yarn run start &

echo "Running tests..."
yarn run cy:test-demos

echo "Stopping the server..."
kill $(lsof -t -i:9001)

echo "Cleaning up..."
rm -rf builds

if [ ! $? -eq 0 ]; then
    echo "Some tests failed!"
    exit 1
fi

echo "All tests passed!"
exit 0
