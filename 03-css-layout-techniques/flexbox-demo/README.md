#Flexbox Demo

Add this CSS to your **main.css**

```
.container {
    background: pink;
    border: 1px solid #555;
    min-height: 400px;
}
.item {
    min-width: 100px;
    min-height: 100px;
    padding: 10px;
}
.item:nth-child(1) {background: tomato;}
.item:nth-child(2) {background: darkorange;}
.item:nth-child(3) {background: gold;}
.item:nth-child(4) {background: lightgreen;}
.item:nth-child(5) {background: cadetblue;}
.item:nth-child(6) {background: mediumpurple;}

.flex {display: flex;}

.flex-direction-row {flex-direction: row}
.flex-direction-row-reverse {flex-direction: row-reverse;}
.flex-direction-column {flex-direction: column;}
.flex-direction-column-reverse {flex-direction: column-reverse;}

.flex-wrap-nowrap {flex-wrap: nowrap;}
.flex-wrap-wrap {flex-wrap: wrap;}
.flex-wrap-wrap-reverse {flex-wrap: wrap-reverse;}

.justify-content-flex-start {justify-content: flex-start;}
.justify-content-flex-end {justify-content: flex-end;}
.justify-content-center {justify-content: center;}
.justify-content-space-between {justify-content: space-between;}
.justify-content-space-around {justify-content: space-around;}
.justify-content-space-evenly {justify-content: space-evenly;}

.align-items-flex-start {align-items: flex-start;}
.align-items-flex-end {align-items: flex-end;}
.align-items-center {align-items: center;}
.align-items-stretch {align-items: stretch;}
.align-items-baseline {align-items: baseline;}

.align-content-flex-start {align-content: flex-start;}
.align-content-flex-end {align-content: flex-end;}
.align-content-center {align-content: center;}
.align-content-stretch {align-content: stretch;}
.align-content-space-between {align-content: space-between;}
.align-content-space-around {align-content: space-around;}

.order0 {order: 0;}
.order1 {order: 1;}
.order2 {order: 2;}
.order3 {order: 3;}
.order4 {order: 4;}
.order5 {order: 5;}

.flex-auto {flex: auto;}
.flex-initial {flex: initial;}
.flex-none {flex: none;}
.flex-1 {flex: 1;}
.flex-2 {flex: 2;}
.flex-3 {flex: 3;}
```