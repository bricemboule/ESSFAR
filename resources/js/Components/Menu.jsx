import AdminMenu from "./AdminMenu";
import EnseignantMenu from "./EnseignantMenu";
import EtudiantMenu from "./EtudiantMenu";
import ScolariteMenu from "./ScolariteMenu";

const Menu = ({ user }) => {
    console.log(user);
    switch (user.role.nom_role) {
        case "etudiant":
            return <EtudiantMenu />;
        case "enseignant":
            return <EnseignantMenu />;
        case "personnel":
            switch (user.personnel.poste) {
                case "Admin":
                    return <AdminMenu />;
                case "Chef Scolarite":
                    return <ScolariteMenu />;
                default:
                    break;
            }
        default:
            break;
    }
};

export default Menu;
