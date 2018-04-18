import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class Note extends React.Component {
	render() {
		return (
			<View style={styles.note}>
				<Text style={styles.noteText}>{this.props.val.date}</Text>
				<Text style={styles.noteText}>{this.props.val.note}</Text>

				<TouchableOpacity
					onPress={this.props.deleteMethod}
					style={styles.noteDelete}>
					<Text style={styles.noteDeleteText}>x</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	note: {
		position: "relative",
		paddingBottom: 20,
		paddingTop: 20,
		paddingRight: 100,
		borderBottomWidth: 1,
		borderBottomColor: "#E0E6ED"
	},
	noteText: {
		borderLeftWidth: 10,
		borderLeftColor: "#E91E63"
	},
	noteDelete: {
		borderRadius: 100,
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",
		top: 10,
		bottom: 10,
		right: 10
	},
	noteDeleteText: {
		color: '#FF4949',
		paddingBottom: 10,
		paddingLeft: 25,
		paddingRight: 25,
		paddingTop: 10,
		fontSize: 24
	}
});
