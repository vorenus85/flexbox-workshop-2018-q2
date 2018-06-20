### Flexbox workshop - Small banners layout ###

```
.container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.i1,
.i2,
.i3,
.i4,
.i5,
.i6 {
    flex: 0 0 16.666%;
}

.i7,
.i8,
.i9 {
    flex: 0 0 33.333%;
}

.i10 {
    flex: 1 0 100%;
}

@media screen and (max-width: 768px) {
    .i1,
    .i2,
    .i3,
    .i4,
    .i5,
    .i6 {
        flex: 0 0 33.333%;
    }

    .i7,
    .i8,
    .i9 {
        flex: 0 0 100%;
    }
}

@media screen and (max-width: 576px) {
    .i1,
    .i2,
    .i3,
    .i4,
    .i5,
    .i6 {
        flex: 0 0 50%;
    }
}

@media screen and (max-width: 480px) {
    .i1,
    .i2,
    .i3,
    .i4,
    .i5,
    .i6 {
        flex: 0 0 100%;
    }
}
```