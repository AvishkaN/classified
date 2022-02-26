import styled from 'styled-components';
import Link from '../../../../Components/UI/Link/Link';



function Categorie({className="",text,svgIcon,number}) {
  return (
    <DIV className={`${className} display-flex align-item-center`}>
             {svgIcon}
             <Link to={text} className="ms-3  category-text">
                {text}
            </Link>
            
            <div className="ms-2 text-color-grey-ori">{number}</div>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Categorie */

    .category-text{
      color: #757575;
    }
    
    .Categorie-wrapper{
      /* width: var(--Categorie-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default Categorie;
