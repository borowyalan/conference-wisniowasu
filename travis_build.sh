echo "========================="
echo "Branch:"
echo $TRAVIS_BRANCH
echo "========================="
if [[ $TRAVIS_BRANCH == "master" ]] || [[ $TRAVIS_BRANCH == "development" ]]
then
    echo "Sending files..."
    cd public/ && tar -zcvf ../build.tar.gz . && cd - 
    echo "Sending files..."
    jo key=$KEY branch=$TRAVIS_BRANCH build=%build.tar.gz | curl -H "Content-Type:application/json" -X POST -d @- $HOOK
else
    echo "Nothing to do..."
fi