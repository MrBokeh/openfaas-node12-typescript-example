## OpenFaaS TypeScript Example for Node12 template ##

### Installation ###
```
cd helloworld
npm i
```

### Build ###
```
npm run build
```

### Unit Test ###
```
npm run test
```

### Simplified CI/CD Workflow ###
```
tsc -p helloworld/tsconfig.json && faas-cli build -f helloworld.yml
```
