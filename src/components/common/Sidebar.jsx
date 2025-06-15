import styled from "styled-components";

const Aside = styled.aside`
  width: 12rem;
  height: 100vh;
  background-color: #1f2937; /* Tailwind의 gray-800 */
  color: white;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ListItem = styled.li`
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #facc15; /* Tailwind의 yellow-300 */
  }
`;

const Sidebar = () => {
  return (
    <Aside>
      <List>
        <ListItem>일정</ListItem>
        <ListItem>예약</ListItem>
      </List>
    </Aside>
  );
};

export default Sidebar;
