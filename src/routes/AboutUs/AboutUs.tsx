import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Container } from '../../components/Container/Container';

export const AboutUs = () => {
    return (
        <>
            <Header />
            <Container>
                <h2 style={{ textAlign: 'center', marginBlock: 16 }}>O nás</h2>
            </Container>
            <Footer />
        </>
    );
};
