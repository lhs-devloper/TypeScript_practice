import React from "react";

type ListItemProps = {
    value: number
}

type NumberListProps = {
    numbers: number[]
}
class ListItem extends React.Component<ListItemProps>{
    render(): React.ReactNode {
        return <li>{this.props.value}</li>
    }
}

class NumberList extends React.Component<NumberListProps>{
    numbers = this.props.numbers;
    listItems = this.numbers.map((number) => 
        <ListItem key={number.toString()} value={number} />
    )
    render(): React.ReactNode {
        return <ul>{this.listItems}</ul>
    }
}

/*
const numberArray:number[] = [1,2,3,4,5]
<NumberList numbers={numberArray} />
Result:
- 1
- 2
- 3
- 4
- 5
*/
export default NumberList
