import {Observable} from 'rxjs';
// Observable
var observable = Observable.create((observer: any) => {
  observer.next('Redmi 1s');
  observer.next('Redmi 2');
  observer.complete()
  observer.next('Redmi 3');
});

// Observer
observable.subscribe(
  (x: any) => addItem(x),
  (error: any) => addItem(error),
  () => addItem('==== Completed ========')
);

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
