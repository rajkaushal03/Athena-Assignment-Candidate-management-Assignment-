export const fetchCandidate = async (setCandidates) => {
  try {
    setCandidates([]);
    const res = await fetch(`/api/candidates`);
    const data = await res.json();

    console.log(data );
    setCandidates(data);
  } catch (error) {
    console.log(error.message);
  }
};
