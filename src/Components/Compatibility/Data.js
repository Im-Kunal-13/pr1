import colors from "../../Utils/colors"

let systemsData = [
    {
        systemName: "MacOS",
        compatiblePercentage: 53,
        barColor: colors.appBlue,
        iconClass: "bi-apple"
    },
    {
        systemName: "Windows",
        compatiblePercentage: 41,
        barColor: colors.appGreen,
        iconClass: "bi-windows"
    },
    {
        systemName: "Linux",
        compatiblePercentage: 6,
        barColor: colors.compatibilityBarViolet,
        iconClass: "bi-git"
    },
]

export default systemsData