export default function Tabs({ children, buttons, buttonsContainer = 'menu' }) {
    const ButtonsContainer = buttonsContainer;

    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            <div id="tab-content">
            {children}
            </div>
        </>
    );
};
