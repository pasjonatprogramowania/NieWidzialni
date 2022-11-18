call npm run build 
call git add dist -f 
call git commit -m "site was updated"
call git subtree push --prefix dist origin gh-pages