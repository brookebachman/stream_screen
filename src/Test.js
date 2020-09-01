import React from 'react';
import styled from 'styled-components';
import EventInfo from './Component/EventInfo.js'
import EventSummary from './Component/EventSummary'
import HostCard from './Component/HostCard.js'
import backdrop from './backdrop.svg';
import ProfileCard from './Component/ProfileCard.js';

const Header = styled.header`
    background: linear-gradient(183deg, rgba(0, 59, 255, .8) 0%, rgba(17, 44, 196, 0.8) 100%);
    position: relative;
`;

const BlurredText = styled.p` 
color: transparent;
text-align: center;
font-size: 370px;
position: absolute;
width: 100%;
top: -292px;
overflow: hidden;
text-shadow: 0 0 50px white;`;

const Container = styled.div`
	max-width: 960px;
	position: relative;
	margin: 0 auto;
`;
const Spacer = styled.div`
	padding-top: 5vh;
`;
const BlockText = styled.article`
	position: relative;
	background-color: blue;
	color: white;
	padding: 15px 20px 60px 20px;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr 1fr 3fr;
`;

const H1 = styled.h1`
	font-family: 'Montserrat', sans-serif;
	font-size: 85px;
	font-weight: bold;
	text-align: center;
`;

const With = styled.span`
	font-style: italic;
	font-size: 15px;
	color: #dcdedc;
	opacity: 80%;
`;
const Ul = styled.ul`
	margin: 0;
	padding: 0;
`;

const Li = styled.li`
	list-style: none;
	color: #dcdedc;
	opacity: 80%;
`;

const Name = styled.p`
	font-size: 15px;
	font-family: 'Montserrat', sans-serif;
`;
const ContentBackground = styled.section`
	background-image: url(${backdrop});
	background-repeat: no-repeat;
	background-position: bottom right;
	min-height: 80vh;
`;

const MainContent = styled.div`
	background-color: white;
	box-shadow: 4px 3px 7px rgba(0, 0, 0, 0.8);
	padding: 60px 35px;
`;

const ProfileCardContainer = styled.div`
	position: absolute;
	top: -70px;
	width: 30%;
`;



const Test = () => {
	return (
		<>
			<Header> 
                <BlurredText>Creator club.</BlurredText>
				<Spacer>
					<Container>
						<BlockText>
							<H1>Creator club.</H1>
							<Grid>
								<span></span>
								<With>with</With>
								<Ul>
									<Li>Josh Constine</Li>
									<Li>Li Jin</Li>
									<Li>Dave Ambrose</Li>
									<Li>Ian Kar</Li>
									<Li> Mario Gabriele</Li>
								</Ul>
							</Grid>
						</BlockText>
					</Container>
				</Spacer>
			</Header>
			<ContentBackground>
				<Container>
					<MainContent>
						<ProfileCardContainer>
							<ProfileCard></ProfileCard>
						</ProfileCardContainer>
                        <EventInfo>

                        </EventInfo>
						<hr />
						<EventSummary>

                        </EventSummary>
					<HostCard>

                    </HostCard>
					</MainContent>
				</Container>
			</ContentBackground>
		</>
	);
};

export default Test;
