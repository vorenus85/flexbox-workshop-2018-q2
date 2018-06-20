### Flexbox workshop - Holy grail layout b version###

```
body {
    display: flex;
    flex-direction: column;
}

#main {
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
}

#main > aside,
#main > article {
    flex: 1 1 100%;
}

#main > nav {
    order: -1;
    flex: 0 0 100%;
}

@media screen and (min-width: 576px) {
    #main {
        flex-direction: row;
    }

    #main > article {
        flex: 1 1 75%;
        order: 2;
    }

    #main > aside {
        flex: 1 1 25%;
        order: 1;
    }
}
```