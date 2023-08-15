import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
	position: relative;
`;

// SideBar
export const SideBarStyle = styled.aside`
    width: 410px;
	height: 100%;
	display: inline-block;
	position: relative;
`;

// Toolbar
export const ToolbarContainer = styled.div`
    width: 100%;
	height: 60px;
	background-color: #EEE;
`;

export const UserPhoto = styled.img`
    width: 40px;
	border-radius: 50%;
	position: absolute;
	left: 15px;
	top: 10px;
	background-color: #CCC;
`;

export const Auxicons = styled.div`
	float: right;
	height: 60px;
	line-height: 60px;
	padding-right: 20px;

	i {
		color: #80868A;
		font-size: 20px;
		margin-left: 15px;
		margin-right: 15px;
		cursor: pointer;
	}
`;

// Notification Container
export const NotificationsStyle = styled.div`
	width: 100%;
	height: 90px;
	padding-top: 23px;
	padding-left: 80px;
	background-color: #9DE1FE;
	color: #384c56;
	position: relative;
	box-sizing: border-box;
`;

export const NotificationsIcons = styled.i`
	svg {
		width: 45px;
		height: 45px;
		text-align: center;
		line-height: 45px;
		border-radius: 50%;
		font-size: 18px;
		color: #9DE1FE;
		background-color: #F5FCFF;
		position: absolute;
		top: 20px;
		left: 15px;
	}
	
	p {
		margin: 0;
	}

	.receive-notification {
		font-size: 15px;
		margin-bottom: 3px;
	}

	.activate-notification {
		font-size: 13px;
	}
`;

// SearchContainer
export const SearchContainer = styled.div`
	height: 50px;
	width: 100%;
	padding-left: 7.5px;
	padding-top: 7.5px;
	background-color: #F8F8F8;
	position: relative;
	color: #BDC1C3;
	box-sizing: border-box;

	i#contact-search{
		position: absolute;
		left: 30px;
		top: 18px;
		font-size: 14px;
	}

	input#search {
		border: none;
		height: 35px;	
		width: 385px;
		padding-left: 60px;
		border-radius: 17.5px;
		background-color: #FFF;
		box-sizing: border-box;
	}

	input#search::placeholder {
		color: #BDC1C3;
	}
`;

// Contacts Container
export const ContactsContainer = styled.div`
	height: auto;
	background-color: #FFF;
`;

export const ContactBox = styled.div`
	cursor: pointer;
	height: 72px;
	background-color: #FFF;
	border-top: 1px solid #f2f2f2;
	position: relative;
	box-sizing: border-box;

	&:last-child{
		border-bottom: 1px solid #f2f2f2;
	}

	&:hover {
		background-color: #f4f5f5;
	}
`;

export const UserContatcPhoto = styled.img`
    width: 50px;
	border-radius: 50%;
	position: absolute;
	left: 15px;
	top: 10px;
	background-color: #CCC;
`;

export const UserInfo = styled.div`
	margin-left: 80px;
	padding-top: 10px;
	display: inline-block;

	p{
		margin: 0;
	}

	.user-name {
		font-size: 16px;
		color: #000;
		margin-bottom: 12px;
	}

	.user-messagepreview {
		font-size: 14px;
		color: #454545;
	}
`;

export const MessageInfo = styled.div`
	position: absolute;
	top: 12px;
	right: 20px;
	display: inline-block;

	p{
		margin: 0;

		svg {
			margin-right: 8px;
			color: #4FC3F7;
		}
	}

	.message-time {
		font-size: 12px;
		margin-bottom: 5px;
		color: #CCC;
	}

	.message-pending {
		background-color: #09d261;
		color: #FFF;
		width: 19px;
		height: 19px;
		line-height: 19px;
		font-size: 12px;
		font-weight: bold;
		border-radius: 50%;
		text-align: center;
		float: right;
	}
`;

// Chat
export const ChatContainerStyle = styled.main`
	position: absolute;
	top: 0;
	left: 410px;
	width: calc(100% - 410px);
	height: 100%;
	background-color: #CCC;
`;

// Chat navbar
export const ChatNavBar = styled.nav`
	height: 60px;
	background-color: #EEEEEE;
	border-left: 1px solid #DDD;
	padding-left: 75px;

	p {
		margin: 0;
	}
`;

export const ContactInfo = styled.div`
	display: inline-block;

	.user-name {
		font-size: 16px;
		height: 60px;
		line-height: 60px;
	}
`;

export const ChatTools = styled.ul`
	float: right;
	display: inline-block;
	height: 60px;
	line-height: 60px;
	margin-right: 20px;

	li {
		display: inline-block;
		margin-left: 15px;
		margin-right: 15px;
		font-size: 18px;
		color: #80868A;
		cursor: pointer;
	}
`;

// Messages
export const MessageContainer = styled.div`
	background-color: #E1DAD2;
	height: calc(100% - 120px);
	position: relative;

	p {
		margin: 0;
	}

	.bg-image {
		background-image: url('../img/background_whats.png');
		background-repeat: repeat;
		opacity: .06;
		width: 100%;
		height: 100%;
	}
`;

export const ChatMessage = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: auto;
	padding: 30px 80px;
	box-sizing: border-box;

	p {
		display: block;
		color: #262626;
		font-size: 14px;
		padding: 7px;
		border-radius: 7px;
		position: relative;
		width: 200px;
	}

	.guest-message {
		background-color: #FFF;
	}

	.guest-message:before {
		content: "";
		width: 0; 
		height: 0; 
		border-bottom: 17px solid transparent; 
		border-right:17px solid #FFF; 
		position: absolute;
		top: 0;
		left: -10px;
	}

	.user-message {
		background-color: #DCF8C6;
		float: right;
	}

	.user-message:after {
		content: "";
		width: 0; 
		height: 0; 
		border-bottom: 17px solid transparent; 
		border-left:17px solid #DCF8C6; 
		position: absolute;
		top: 0;
		right: -10px;
	}
`;

// Send Message
export const SendMessageContainer = styled.div`
	background-color: #EFEFEF;
	border-left: 1px solid #DDD;
	height: 60px;
	padding-left: 20px;
	padding-right: 20px;
	position: relative;

	input#chatmessage {
		position: absolute;
		top: 10px;
		left: 60px;
		background-color: #FFF;
		border: none;
		height: 40px;
		border-radius: 20px;
		padding-left: 20px;
		font-size: 16px;
		width: 815px;
	}

	svg {
		font-size: 24px;
		color: #80868A;
		cursor: pointer;
		height: 60px;
		line-height: 60px;
	}

	svg#microphone {
		float: right;
	}
`;