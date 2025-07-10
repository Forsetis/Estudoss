import React from 'react';

class RemainingTooltip extends React.Component {
  calculateRemainingDays = () => {
    const { validDate } = this.props;
    const today = new Date();
    const expiry = new Date(validDate);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 0) return `Faltam ${diffDays} dias`;
    if (diffDays === 0) return `Vence hoje!`;
    return `Vencido há ${Math.abs(diffDays)} dias`;
  };

  FormatDateBR = (isoString) => {
  const date = new Date(isoString);
  if (isNaN(date.getTime())) return "Data inválida";

  const dia = String(date.getDate()).padStart(2, '0');
  const mes = String(date.getMonth() + 1).padStart(2, '0');
  const ano = date.getFullYear();

  return `${dia}/${mes}/${ano}`;
};

  getBackgroundColor = () => {
    const {validDate} = this.props;
    const today = new Date();
    const expiry = new Date(validDate);

    if (isNaN(expiry.getTime())) return "transparent";

    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return "#f5c6cb";
    if (diffDays <= 60) return "#ffcc80";

    return "transparent";
  }

  render() {
    const { validDate } = this.props;
    const backgroundColor = this.getBackgroundColor();
    const formattedDate = this.FormatDateBR(validDate);
    const tooltip = this.calculateRemainingDays();

    const style = {
      backgroundColor,
      borderRadius: "4px"
    };

    if (backgroundColor !== "transparent") {
      style.color = "#333"
    }

    return (
      <span title={tooltip}
            style={style}>
        Validade: {formattedDate}
      </span>
    );
  }
}

export default RemainingTooltip;