import "./Home.css";

export function Home() {
    return (
        <main>
            <section className="main__presantation">
                <article className="main__important">
                    <h2 className="important__tittle">Uma das entregas mais rápidas da sua cidade!</h2>
                    <p className="important__text">
                        Aqui nos dedicamos em oferecer a melhor experiência
                        que você possa imaginar!
                        Sinta-se a vontade para navegar e escolher o seu
                        pedido e recebe-lo em um piscar de olhos!
                    </p>
                </article>
                <article className="main__products">
                    <p>Apresentação de produtos</p>
                </article>
            </section>
        </main>
    )
}