### Flexbox workshop - Lego legion ###

### Adjuk meg a layout kapcsoló értékétől független flexbox tulajdonságokat

```
.card-wrapper {
    display: flex;
    flex-wrap: wrap;
}

.design-switcher {
    display: flex;
}

.card-name {
    flex: 1 0 auto;
}

.card-price {
    display: flex;
    align-items: center;
}

.card-icons {
    display: flex;
    justify-content: space-around;
}

.card-item {
    display: flex;
}
```

### Adjuk meg a vertikális nézet css szabályait

```
/* design-vertical */

.design-vertical .card-item {
    flex-direction: column;
    width: 25%;
}

.design-vertical .card-desc {
    display: none;
}

.design-vertical .card-price {
    justify-content: space-around;
    align-items: center;
}

.design-vertical .card-parameter {
    text-align: center;
}

/* /design-vertical */
```

### Adjuk meg a horizontális nézet css szabályait
```
/* design-horizontal */
.design-horizontal {
    flex-direction: row;
}

.design-horizontal .card-item {
    flex-direction: column;
    padding-left: 200px;
    position: relative;
    width: 50%;
}

.design-horizontal .card-desc {
    display: block;
    flex: 1 0 auto;
}

.design-horizontal .card-image {
    width: 200px;
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
}

.design-horizontal .card-parameter {
    width: 100%;
}

.design-horizontal .card-price {
    justify-content: space-evenly;
}

/* /design-horizontal */
```

### Adjuk meg a grid nézet css szabályait

```
/* design-grid */
.design-grid {
    flex-direction: row;
}

.design-grid .card-item {
    flex-direction: column;
    width: 12.5%;
}

.design-grid.card-icons,
.design-grid .card-desc {
    display: none;
}

.design-grid .card-name {
    font-size: 1rem;
    text-align: center;
}

.design-grid .card-price {
    justify-content: space-between;
}

.design-grid .card-price-special {
    font-size: 1.2rem;
}

.design-grid .card-price-original {
    font-size: .8rem;
}

.design-grid .card-action-to-cart {
    font-size: 1rem;
}

/* /design-grid */
```

### Formázzuk egy kicsit a mobil nézetet

```
@media screen and (max-width: 1300px) {
    .design-horizontal .card-item {
        width: 100%;
    }

    .design-vertical .card-item {
        width: 50%;
    }

    .design-grid .card-item {
        width: 25%;
    }
}
```

