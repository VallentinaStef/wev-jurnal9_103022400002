import './LabelHarga.jsx'

function KartuMenu ({nama, harga, kategori}){
    return(
        <div className="kartu">
            <h3>{nama}</h3>
            <h4>{kategori ||"Makanan"}</h4>
            <labelHarga nilai={harga}></labelHarga>
        </div>
    );
}

export default KartuMenu
