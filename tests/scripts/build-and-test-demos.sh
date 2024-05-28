#!/bin/bash

# Set error variable
ERROR=0
DEMOS_PATH=$(pwd)

# Prepare tmp dirs
rm -rf builds
mkdir -p builds
mkdir -p builds/assets

# Prepare the environment: install dependencies and build samples
for DIR in "$DEMOS_PATH"/* ; do
    if [[ -d "$DIR" && ! "$DIR" = "$DEMOS_PATH/tests" && ! "$DIR" = "$DEMOS_PATH/builds" ]]; then
        DEMO_NAME=$(echo "$DIR" | awk -F '/' '{print $NF}')
        # Navigate to the demo directory
        cd "$DIR" || exit

        # Install packages
        echo "Installing dependencies for $DEMO_NAME"
        yarn > /dev/null 2>&1

        # Build demo
        echo "Building demo: $DEMO_NAME"

        if [[ -f "webpack.config.js" ]]; then
            # - Use legacy webpack build if webpack config present
            echo "Using webpack build..."
            npx webpack --mode development > /dev/null
        else
            # - Build with yarn + vite and move files to common dir
            echo "Using vite build..."
            yarn build > /dev/null
            cp "$DIR/dist/index.html" "$DEMOS_PATH/builds/$DEMO_NAME.html"
            cp -R "$DIR/dist/assets" "$DEMOS_PATH/builds/"

            # Copy additional file from `mobile` demo
            if [[ -f "mobile-iframe.html" ]]; then
                cp "$DIR/dist/mobile-iframe.html" "$DEMOS_PATH/builds/mobile-iframe.html"
            fi
        fi

        if [ ! $? -eq 0 ]; then
            echo "Building failed: $DEMO_NAME"
            ERROR=1
        fi
    fi
done

echo "Samples building completed."

# Start the server
echo "Starting up the server for legacy-built samples."
http-server $DEMOS_PATH -p 9001 -s &
echo "Starting up the server for NIM-built samples."
http-server "$DEMOS_PATH/builds/" -p 9002 -s &

# Start tests
cd "$DEMOS_PATH"/tests || exit
yarn run cy:test-demos

if [ ! $? -eq 0 ]; then
    echo "Some tests failed."
    ERROR=1
fi

if [ $ERROR -eq 1 ]; then
    exit 1
fi

exit 0
