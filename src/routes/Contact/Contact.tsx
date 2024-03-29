import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Container } from '../../components/Container/Container';

export const Contact = () => {
    return (
        <>
            <Header />
            <Container>
                <h2 style={{ textAlign: 'center', marginBlock: 16 }}>Kontakt</h2>
            </Container>
            <Footer />
        </>
    );
};
