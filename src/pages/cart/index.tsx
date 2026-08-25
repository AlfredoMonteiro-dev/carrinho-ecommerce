

export function Cart(){
    return(
        <div className="w-full max-w-7xl mx-auto">
        <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

        <section className="flex items-center justify-between border-b-2 border-gray-300">
            <img
                 className="w-28"
                 src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-4-select-202409_FV1_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=WnVKRVRUTFVsYThXaWkydWViL1Q3YmRudmFtWnZKZ0szeGF4cDZsczlhOWU5bTRrM1hZbmw5eCtiRXdXMENIbGg5cFlXTXBPaHRzU3RjRTMyRlg3eTd0UkdMSDBFQ1ZUdTNVa3daQmFjd1hvRUpUejJXeHlMOSsrLy9ZbWFSbmo"
                 alt="Logo do produto" 
                 />

                 <strong>Preço: R$1.000,00</strong>

                 <div className="flex items-center justify-center gap-3">
                    <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
                        -
                    </button>
                    1
                    <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
                        +
                    </button>
                 </div>

                 <strong className=" float-right">
                    Subtotal R$1.000,00
                 </strong>
        </section>

        <p className="font-bold mt-4">R$1.000,00</p>
        </div>
    )
}