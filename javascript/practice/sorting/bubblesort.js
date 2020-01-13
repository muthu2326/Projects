function selectionSort(ar){
    let temp = 0,tempAr = ar
    for(let i = 0; i < ar.length - 1; i++){

        // swap
        ar[minIndex] = ar[i]
        ar[i] = temp

    }
    return ar
}

    console.log(selectionSort([6, 7, 4, 5 ,2]))