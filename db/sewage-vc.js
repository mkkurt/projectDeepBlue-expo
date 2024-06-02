export default [
  {
    name: "P1 Vacuum cannot be provided even though the ejector pump is running.",
    reasons: [
      {
        name: "P1R1 The tank is empty or there is foam instead of liquid in the tank.",
        solutions: [
          "P1S1.1 Fill the tank with water at least to the lower float switch level and check the pump performance.",
          "P1S1.2 Excessive vibration will occur when the pump tries to pump foam instead of liquid. In this case, add water to the tank and try again. If the problem is not solved despite adding water to the tank, reduce the amount of foam by pouring anti-foam chemical into the tank.",
        ],
      },
      {
        name: "P1R2 Clogged or damaged ejector.",
        solutions: ["P1S2 Maintain the ejector."],
      },
      {
        name: "P1R3 Valves are closed.",
        solutions: [
          "P1S3 Check and open the valves, if there is blockage in the valves, maintain them.",
        ],
      },
      {
        name: "P1R4 Wrong rotation direction of the motor.",
        solutions: ["P1S4 Change the motor connections (phases)."],
      },
      {
        name: "P1R5 Blockage or leakage in the pump circuit.",
        solutions: [
          "P1S5 Close the pump inlet valve and run the pump, if there is a vacuum in the pump, there is a leak in the circuit before the valve, find and fix the leak.",
        ],
      },
    ],
  },
  {
    name: "P2 Ejector pump cannot provide sufficient vacuum.",
    reasons: [
      {
        name: "P2R1 Blockage in the ejector due to waste.",
        solutions: [
          "P2S1.1 Make sure the pump is stopped and the valve is closed.",
          "P2S1.2 Clean the waste in the ejector and the ejector, if no results are obtained, apply the following procedures:\n    Remove the flange connections, elbows, connection cone and ejector.\n    Remove the non-return valve in front of (inlet of) the ejector.\n    Clean the sealing surfaces and replace the valve if necessary.\n    While the ejector is disassembled, check the inside of the nozzle and the ejector housing for sludge and dirt.\n    Assemble the ejector and non-return valve by reversing the disassembly order.\n    Check all sealing elements and renew if necessary.\n    Check that the non-return valve is assembled correctly and connected in the correct direction.",
        ],
      },
    ],
  },
];
