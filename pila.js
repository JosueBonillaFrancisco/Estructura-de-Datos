function Pila(){
    this.dataStorage=[];
    this.top=0;
    this.push= push;
    this.pop=pop;
    this.peek= peek;
    this.clear=clear;
    this.length=length;
}
function push(item){
    this.dataStorage[this.top++]=item;
}
function pop() {
    return this.dataStorage[--this.top];
    
}
function peek() {
    return this.dataStorage[this.top-1];
    
}
function clear() {
    this.top=0;
}
function length() {
    return this.top;
}