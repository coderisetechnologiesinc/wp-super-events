import { useCallback } from "react";
import Card from "../Containers/Card";
import NewInputFieldControl from "./NewInputFieldControl";

const HTMLEditor = ({ value, onChange }) => {
  // Template HTML arrives with hard line breaks that the source view should
  // not show; collapse them back into <br/> before rendering.
  const getDecoratedTplText = useCallback((rawTplText) => {
    if (!rawTplText || rawTplText.length === 0) return rawTplText;
    const replaceRegex = new RegExp(/\n\s*|\n+/gm);
    return rawTplText
      .replace(replaceRegex, "")
      .replace(/<p><br\/><\/p>/g, "<br/>")
      .replace(/<p><br><\/p>/g, "<br/>")
      .replace(/<br>/g, "<br/>");
  }, []);

  return (
    <Card>
      <NewInputFieldControl
        textarea
        rows={8}
        width="100%"
        value={getDecoratedTplText(value)}
        onChange={onChange}
      />
    </Card>
  );
};

export default HTMLEditor;
