const arr = [[11 ,2 ,4],
             [4,5,6],
             [10,8, -12]
            ]

export const Prueba= (arr) => {
 
    var n = arr.length 
    var suma_1 = 0
    var suma_2 = 0

    for (var i = 0, x = n - 1; i < n; i++, x--) {
         suma_1 += arr[i][i]
         suma_2 += arr[i][x]
    }
         return  console.log(Math.abs(suma_1 - suma_2))


}

Prueba(arr)