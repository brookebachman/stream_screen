import React from 'react';
import styled from 'styled-components';
import { DollarCircle } from '@styled-icons/boxicons-regular/DollarCircle';

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

const EventTiming = styled.div`
	padding-bottom: 14px;
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
	padding-left: 108px;
	padding-top: 15px;
	margin: 10px 0px;
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
	padding: 1px 8px;
	background-color: #daf5e5;
	border-radius: 16px;
	border: 1px solid #daf5e5;
	display: inline-block;
	cursor: pointer;
	color: rgb(0, 166, 120);
	font-size: 14px;
	font-weight: bold;
	text-decoration: none;
	font-family: 'Montserrat';
`;
const Right = styled.div``;

const ButtonContainer = styled.div`
	padding-top: 6px;
`;

const Icon = styled.i`
	padding-right: 5px;
`;

const EventInfo = () => {
	return (
		<>
			<EventCard>
				<EventTitle>
					Opportunities in the Creator Economy <br></br>
					<EventTiming>
						<EventDate>Sun, Aug 23rd </EventDate>
						<span>
							<EventTime>7:00 PM - 7:45 PM MST</EventTime>
						</span>
					</EventTiming>
					<Button>
						<Icon>
							<DollarCircle size="35"></DollarCircle>
						</Icon>
						Send a tip
					</Button>
				</EventTitle>
				<Right>
					<Free> Free</Free>
					<ButtonContainer>
						<ButtonWatch>Watch Recording</ButtonWatch>
					</ButtonContainer>
				</Right>
			</EventCard>
		</>
	);
};

export default EventInfo;
