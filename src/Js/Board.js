class Board extends React.Component {
	renderSquare(i) {
		return <buttton className="square">{this.props.value}</buttton>;
	}
}
