## Task 1

- Give a non-empty zero indexed array A with N integers
- Perform a single swap operation in array A
- This operation takes 2 indices, I and J
- Such that `O <= T <= J <= N`
- Exchange values of `A[I]` and `A[J]`
- Check whether array A can be sorted into non-decreasing order by performing at most one swap operation

```js
A = [1, 5, 3, 3, 7] //=> true
//A[1] and A[3] can be swapped, sorts in non-decreasing order
A = [1, 3, 5, 3, 4] // => false
// Can not be sorted into increasing order with one swap

```
