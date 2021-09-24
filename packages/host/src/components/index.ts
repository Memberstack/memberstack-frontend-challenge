import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);
`

export const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 80rem/* 1280px */;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

export const IFrameContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  text-align: center;
  padding: 4rem 0;
`;

export const Header = styled.h1`
  margin-top: 0.5rem/* 8px */;
  font-size: 2.25rem/* 36px */;
  line-height: 2.5rem/* 40px */;
  font-weight: 800;
  color: rgba(17, 24, 39, 1);
  letter-spacing: -0.025em;
  @media (min-width: 640px) {
    font-size: 3rem/* 48px */;
    line-height: 1;
  }
`;

export const Text = styled.p`
  margin-top: 0.5rem/* 8px */;
  font-size: 1rem;
  line-height: 1.5rem;
  color: rgba(107, 114, 128, 1);
`;

export const Footer = styled.footer`
  flex-shrink: 0;
  max-width: 80rem/* 1280px */;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
  font-size: 0.875rem/* 14px */;
  line-height: 1.25rem/* 20px */;
  font-weight: 500;
  color: rgba(107, 114, 128, 1);
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

export const Link = styled.a`
  font-size: 0.875rem/* 14px */;
  line-height: 1.25rem/* 20px */;
  font-weight: 500;
  color: rgba(107, 114, 128, 1);
  :hover {
    color: rgba(75, 85, 99, 1);
  }
`;
