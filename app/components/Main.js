import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	ScrollView,
	TouchableOpacity,
	KeyboardAvoidingView
} from "react-native";
import Note from "./Note";

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			note: ""
		};
	}
	render() {
		let notes = this.state.notes.map((val, key) => {
			return (
				<Note
					key={key}
					keyval={key}
					val={val}
					deleteMethod={() => this.deleteNote(key)}
				/>
			);
		});
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerText}>Tasks</Text>
				</View>
				<ScrollView style={styles.scrollContainer}>{notes}</ScrollView>

				<View style={styles.footer}>
					<TextInput
						style={styles.textInput}
						onChangeText={note => this.setState({ note })}
						value={this.state.note}
						placeholder="Add task..."
						placeholderTextColor="#C0CCDA"
					/>
				</View>

				<TouchableOpacity
					onPress={this.addNote.bind(this)}
					style={styles.addButton}>
					<Text style={styles.addButtonText}>+</Text>
				</TouchableOpacity>
			</View>
		);
	}

	addNote() {
		if (this.state.note) {
			var d = new Date();
			this.state.notes.push({
				date: d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
				note: this.state.note
			});
			this.setState({ notes: this.state.notes });
			this.setState({ note: "" });
		}
	}

	deleteNote(key) {
		this.state.notes.splice(key);
		this.setState({ notes: this.state.notes });
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	header: {
		backgroundColor: "#1FB6FF",
		alignItems: "center",
		justifyContent: "center"
	},
	headerText: {
		color: "white",
		fontSize: 22,
		fontWeight: "bold",
		paddingBottom: 20,
		paddingTop: 30
	},
	scrollContainer: {
		flex: 1,
		marginBottom: 100
	},
	footer: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 10
	},
	textInput: {
		alignSelf: "stretch",
		color: "#1F2D3D",
		padding: 20,
		borderTopWidth: 2,
		borderTopColor: "#ededed"
	},
	addButton: {
		position: "absolute",
		zIndex: 11,
		right: 20,
		bottom: 90,
		backgroundColor: "#1FB6FF",
		width: 55,
		height: 55,
		borderRadius: 35,
		alignItems: "center",
		justifyContent: "center",
		elevation: 8
	},
	addButtonText: {
		color: "#fff",
		fontSize: 20
	}
});
