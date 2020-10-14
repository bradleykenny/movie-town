import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Jumbotron, Image, Button } from "react-bootstrap";
import "../style/Profile.css";

const Profile = () => {
	let avatar = "https://robohash.org/Dwight";

	return (
		<div>
			<Jumbotron>
				<Image src={avatar} roundedCircle className="profileImage" />
				<h1>FirstName LastName</h1>
				<h3>Username</h3>

				<Button variant="primary" className="followBtn">
					Follow
				</Button>
				<Button variant="primary" className="editBtn">
					Edit
					<svg
						width="1em"
						height="1em"
						viewBox="0 0 16 16"
						class="bi bi-pen-fill ml-2 mb-1"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"
						/>
					</svg>
				</Button>
			</Jumbotron>
		</div>
	);
};

export default Profile;