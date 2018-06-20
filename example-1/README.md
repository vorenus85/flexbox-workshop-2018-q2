### Flexbox workshop - Holy grail layout ###

```
body {
    display: flex;
    flex-direction: column;
}

#main {
    display: flex;
    flex: 1;
    flex-direction: column;
}

#main > article {
    flex: 1;
}

#main > nav {
    order: -1;
}

@media screen and (min-width: 576px) {
    #main {
        flex-direction: row;
    }

    #main > nav,
    #main > aside {
        flex: 0 0 20vw;
    }
}
```