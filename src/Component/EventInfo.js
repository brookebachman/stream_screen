import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EventCard = styled.div`
	display: flex;
	flex-direction: row;
	align-content: space-between;
	margin: 10px;
	padding: 5px;
`;

const EventTitle = styled.div`
	flex: 1;
	font-family: 'Montserrat', sans-serif;
	font-size: 25px;
	font-weight: bold;
`;

const EventDate = styled.span`
	font-family: 'Montserrat', sans-serif;
	font-size: 15px;
	color: black;
`;

const EventTime = styled.span`
	font-family: 'Montserrat', sans-serif;
	font-size: 15px;
	color: #727272;
`;

const Free = styled.h3`
	font-family: 'Montserrat', sans-serif;
	font-size: 19px;
	margin: 15px;
`;

const ButtonWatch = styled.button`
	box-shadow: 0px 10px 14px -7px #3e7327;
	background-color: rgb(0, 166, 120);
	border-radius: 4px;
	border: 1px solid rgb(0, 166, 120);
	display: inline-block;
	cursor: pointer;
	color: #ffffff;
	font-size: 14px;
	font-weight: bold;
	padding: 14px 14px 14px 14px;
	text-decoration: none;
	text-shadow: 0px 1px 0px #5b8a3c;
	color: white;
	font-family: 'Montserrat';
`;
const Button = styled.button`
box-shadow: 0px 10px 14px -7px #afb0b3;
	
	background-color:#7feb9f;
	border-radius:16px;
	border:1px solid #7feb9f;
	display:inline-block;
	cursor:pointer;
	color:black;
	font-family:Arial;
	font-size:14px;
	font-weight:bold;
	padding:6px 14px 6px 14px;
	text-decoration:none;
  font-family: 'Montserrat';
`;
const Right = styled.div`
	padding: 10px;
`;

const Icon = styled.i``;

const EventInfo = () => {
	return (
		<>
			<EventCard>
				<EventTitle>
					Opportunities in the Creator Economy <br></br>
					<EventDate>Sun, Aug 23rd </EventDate>
					<span>
						<EventTime>7:00 PM - 7:45 PM MST</EventTime>
					</span>
					<br />
					<Button>
						<Icon>
							<i class="fas fa-dollar-sign"></i>
							{/* <FontAwesomeIcon icon={"fas",  "fa-dollar-sign"}>
          </FontAwesomeIcon> */}
						</Icon>
						$ Send a tip 
					</Button>
				</EventTitle>
				<Right>
					<Free>
						{' '}
						Free
						<br />
						<ButtonWatch>Watch Recording</ButtonWatch>
					</Free>
				</Right>
			</EventCard>
		</>
	);
};

export default EventInfo;
