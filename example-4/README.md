### Flexbox workshop - Dominos ###

### A kártyák egymáshoz képesti elrendezését alakítsuk ki

```
.domino-wrapper {
    display: flex;
    justify-content: space-evenly;
}
```

### 1. Dominó formázása
```
.domino {
    display: flex;
}

.domino-1 {
    justify-content: center;
    align-items: center;
}
```

### 2. Dominó formázása
```
.domino-2 {
    justify-content: space-between;
    align-items: flex-start;
}

.domino-2 .circle-2 {
    align-self: flex-end;
}
```

### 3. Dominó formázása
```
.domino-3 {
    justify-content: space-between;
    align-items: flex-start;
}

.domino-3 .circle-2 {
    align-self: center;
}

.domino-3 .circle-3 {
    align-self: flex-end;
}
```

### 4. Dominó formázása
```
.circle-group {
    display: flex;
}

.domino-4 {
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
}

.domino-4 .circle-2,
.domino-4 .circle-4 {
    align-self: flex-end;
}

.domino-4 .circle-group {
    width:  100%;
    justify-content: space-between;
    align-items: flex-start;
}

.domino-4 .circle-group-2 {
    align-self: flex-end;
}
```
### 5. Dominó formázása
```
.domino-5 {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
}

.domino-5 .circle-3 {
    align-self: center;
}

.domino-5 .circle-2,
.domino-5 .circle-4 {
    align-self: flex-end;
}

.domino-5 .circle-group {
    width:  100%;
    justify-content: space-between;
    align-items: flex-start;
}

.domino-5 .circle-group-2 {
    align-self: flex-end;
}
```

### 6. Dominó formázása
```
.domino-6 {
    display: flex;
    justify-content: space-between;
}

.domino-6 .circle-group {
    flex-flow: column;
    display: flex;
    justify-content: space-between;
}
```