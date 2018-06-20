### Flexbox workshop - Webshop header ###

```
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navigation {
    order: 1;
}

.logo {
    order: 2;
    margin-left: auto;
}

.search {
    order: 4;
}

.phone {
    order: 3;

}

.navigation {
    display: flex;
}

.phone {
    margin-left: auto;
}

@media all and (max-width: 992px) {
    header {
        justify-content: space-around;
    }

    header a {
        font-size: 150%;
    }
}

@media all and (max-width: 768px) {
    header {
        flex-flow: column wrap;
    }

    .logo {
        order: -2;
        margin-left: 0;
    }

    .phone {
        order: -1;
        margin-left: 0;
    }

    .search {
        display: none;
    }
}
```