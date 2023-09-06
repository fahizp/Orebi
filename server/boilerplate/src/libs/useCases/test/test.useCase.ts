export const test_UseCase = (dependencies: any) => {
  const {repository: { testRepository } } = dependencies;

  if (!testRepository) throw new Error("The test repository should be dependencie");

  const execute = ({ data }: { data: string }) => testRepository.test(data);

  return { execute };
};
