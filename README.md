# Queen Attack

Data una posición de dos reinas en un tablero de ajedrez, indicar cuando ellas pueden o no atacarse entre sí.

En el juego de ajedrez, una reina puede atacar piezas que estén en la misma fila, columna o en diagonal.

Un tablero de ajedrez puede estar representado por un arreglo de 8 x 8.

Por tanto, si le dices a la reina blanca que está en la posición (2, 3) y la negra está en la posición (5, 6), entonces tendrás una figura como la siguiente:

```text
_ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _
_ _ _ W _ _ _ _
_ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _
_ _ _ _ _ _ B _
_ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _
```

Debes tambien ser capaz de responder cuando una reina puede atacar a otra. En ese caso, la respuesta debería ser sí, ellas pueden, porque ambas piezas están en diagonal.
