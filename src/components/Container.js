import styled from "styled-components";

const Wrapper = styled.section`
				background-color: #282C34;
				color: #FFF;
				margin: 0 auto;
				width: 80%;
			`;

const Container = ({ children }) => {
	return (
		<>
			<Wrapper>
				{children}
			</Wrapper>
		</>
	);
};

export default Container;