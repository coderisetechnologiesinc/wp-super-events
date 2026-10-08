import { useParams, useNavigate } from "react-router-dom";
import CreateLocationFilterForm from "./CreateLocationFilterForm";
import CreateLanguageFilterForm from "./CreateLanguageFilterForm";
import CreateCategoryFilterForm from "./CreateCategoryFilterForm";
import CreateMemberFilterForm from "./CreateMemberFilterForm";
import { useState } from "react";
export default function CreateFilterPage() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onCancel = () => navigate(-1);

  const map = {
    Locations: CreateLocationFilterForm,
    Languages: CreateLanguageFilterForm,
    Categories: CreateCategoryFilterForm,
    Members: CreateMemberFilterForm,
  };

  const Form = map[type];

  return (
    <>
      {Form ? (
        <Form loading={loading} setLoading={setLoading} onCancel={onCancel} />
      ) : (
        <p>Unknown filter type.</p>
      )}
    </>
  );
}
