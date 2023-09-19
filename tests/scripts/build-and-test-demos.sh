#!/bin/bash

# Set error variable
ERROR=0

DEMOS_PATH=`pwd`

# Prepare the environment: install dependencies and build samples
for DIR in $DEMOS_PATH/* ; do
    if [[ -d "$DIR" && ! "$DIR" = "$DEMOS_PATH/tests" ]]; then
        DEMO_NAME=$(echo $DIR | awk -F '/' '{print $NF}')
        # Navigate to the demo directory
        cd $DIR
        # Install packages
        echo "Installing dependencies for $DEMO_NAME"
        yarn > /dev/null 2>&1
        # Build demo
        echo "Building demo: $DEMO_NAME"
        npx webpack --mode development > /dev/null

        if [ ! $? -eq 0 ]; then
            echo "Building failed: $DEMO_NAME"
            ERROR=1
        fi
    fi
done

echo "Samples building completed."

# Start the server
echo "Starting up the server."
http-server $DEMOS_PATH -p 9001 -s &

# Start tests
cd $DEMOS_PATH/tests
yarn run cy:test-demos

if [ ! $? -eq 0 ]; then
        echo "Some tests failed."
        ERROR=1
fi

if [ $ERROR -eq 1 ]; then
    exit 1
fi

exit 0
