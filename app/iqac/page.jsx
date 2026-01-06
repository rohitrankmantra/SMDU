"use client";

const page = () => {
  const tableData = [
    {
      sno: 1,
      designation: ["Chairperson", "Vice-Chancellor"],
      members: [{ name: "Prof. (Dr.) Bhagwan Nautiyal" }],
    },
    {
      sno: 2,
      designation: ["Teachers to Represent All Levels", "(Three to Eight)"],
      members: [
        { name: "Mr. Rajesh Kohli", dept: "B.Ed. Department" },
        { name: "Bilal Ahmad", dept: "Paramedical Department" },
        { name: "Mr. Yatendra Rawat", dept: "Agriculture Department" },
      ],
    },
    {
      sno: 3,
      designation: ["One Member From the Management"],
      members: [{ name: "Mr. Suman Nautiyal", dept: "Advocate" }],
    },
    {
      sno: 4,
      designation: ["Few Senior Administrative Officers"],
      members: [{ name: "Dr. Amit Kumar", dept: "Registrar" }],
    },
    {
      sno: 5,
      designation: [
        "One Nominee each from Local Society, Students, and Alumni",
      ],
      members: [
        { name: "Mr. Pawan Nautiyal", dept: "Advocate" },
        { name: "Mr. Aditya Nautiyal", dept: "" },
        { name: "Mr. Kamleshwar Uniyal", dept: "" },
      ],
    },
    {
      sno: 6,
      designation: [
        "One Nominee each from Employers / Industrialists / Stakeholders",
      ],
      members: [
        { name: "Mr. Rajesh Rana", dept: "" },
        { name: "Mr. Rajesh Yadav", dept: "" },
      ],
    },
    {
      sno: 7,
      designation: ["One Senior Teacher as the Coordinator / Director of IQAC"],
      members: [{ name: "Dr. Kapil Mohan", dept: "Principal, BNYS" }],
    },
  ];
  return (
    <>
      <section className="w-full py-16 bg-[#FD5F00]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Internal Quality Assurance Cell (IQAC)
          </h2>

          <p className="text-white text-md md:text-xl leading-relaxed">
            Smt. Manjira Devi University, Uttarkashi (Uttarakhand)
          </p>
        </div>
      </section>
      {/*------------------------------------------------------------ Section 2 --------------------------------------------*/}

      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* ===== DESKTOP TABLE ===== */}
          <div className="hidden md:block overflow-x-auto shadow">
            <table className="w-full border border-gray-200 rounded-xl shadow-xl overflow-hidden bg-white">
              <thead className="bg-orange-500">
                <tr>
                  <th className="px-6 py-4 text-white text-left border">
                    S. No.
                  </th>
                  <th className="px-6 py-4 text-white text-left border">
                    Designation
                  </th>
                  <th className="px-6 py-4 text-white text-left border">
                    Name
                  </th>
                </tr>
              </thead>

              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index} className="border-t align-top">
                    <td className="px-6 py-6 border">{row.sno}</td>

                    <td className="px-6 py-6 border">
                      {row.designation.map((des, i) => (
                        <div
                          key={i}
                          className={
                            i === 0 ? "font-medium" : "text-sm text-gray-600"
                          }
                        >
                          {des}
                        </div>
                      ))}
                    </td>

                    <td className="px-6 py-6 space-y-4 border">
                      {row.members.map((member, i) => (
                        <div key={i}>
                          <div className="font-medium">{member.name}</div>
                          {member.dept && (
                            <div className="text-sm text-gray-600">
                              {member.dept}
                            </div>
                          )}
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ===== MOBILE CARD VIEW ===== */}
          <div className="md:hidden space-y-6">
            {tableData.map((row, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-4 border"
              >
                <div className="text-sm text-orange-500 font-semibold mb-2">
                  S. No. {row.sno}
                </div>

                <div className="mb-3">
                  {row.designation.map((des, i) => (
                    <div
                      key={i}
                      className={
                        i === 0 ? "font-medium" : "text-sm text-gray-600"
                      }
                    >
                      {des}
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  {row.members.map((member, i) => (
                    <div key={i}>
                      <div className="font-medium text-gray-900">
                        {member.name}
                      </div>
                      {member.dept && (
                        <div className="text-sm text-gray-600">
                          {member.dept}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
