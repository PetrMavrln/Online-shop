import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Container, Nav, Navbar, Stack, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from 'utils/consts';

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
        window.location.reload();
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href={SHOP_ROUTE}>КупиДевайс</Navbar.Brand>
                {user.isAuth ?
                    <Nav className="ms-auto">
                        <Stack direction="horizontal" gap={1}>
                            <Button
                                type="button"
                                variant="outline-light"
                                onClick={() => navigate(ADMIN_ROUTE)}
                            >
                                Админ панель
                            </Button>
                            <Button
                                type="button"
                                variant="outline-light"
                                onClick={() => logOut()}
                            >
                                Выйти
                            </Button>
                        </Stack>
                    </Nav>
                    :
                    <Nav className="ms-auto">
                        <Button type="button" variant="outline-light" onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;